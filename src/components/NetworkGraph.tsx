import React, { useCallback, useRef, useState, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { forceX, forceY } from 'd3-force';
import styled from 'styled-components';

interface NodeData {
  id: string;
  label: string;
  color?: string;
  x?: number;
  y?: number;
  fx?: number;
  fy?: number;
}

interface LinkData {
  source: string;
  target: string;
}

interface GraphData {
  nodes: NodeData[];
  links: LinkData[];
}

const GraphContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 1.5s ease-in-out;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  canvas {
    outline: none;
  }
`;

const NetworkGraph: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const graphRef = useRef<any>();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [graphData] = useState<GraphData>({
    nodes: [
      { id: 'home', label: 'Home' },  // Central node
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'leadership', label: 'Leadership' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    links: [
      { source: 'home', target: 'about' },
      { source: 'home', target: 'experience' },
      { source: 'home', target: 'leadership' },
      { source: 'home', target: 'projects' },
      { source: 'home', target: 'contact' },
    ]
  });

  useEffect(() => {
    // Add custom forces to pull nodes back to center
    if (graphRef.current) {
      const fg = graphRef.current;
      fg.d3Force('centerX', forceX(0).strength(0.05));
      fg.d3Force('centerY', forceY(0).strength(0.05));
      fg.d3Force('charge')?.strength(-800);  // Stronger repulsion for better spacing
      fg.d3Force('link')?.distance(100);  // Set link distance
      fg.d3Force('collide')?.strength(1).radius(60);
    }
  }, []);

  const handleNodeClick = useCallback((node: NodeData) => {
    // Scroll to section when node is clicked
    if (node.id === 'home') {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(node.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleNodeDrag = useCallback((node: NodeData) => {
    // Allow dragging
    node.fx = node.x;
    node.fy = node.y;
  }, []);

  const handleNodeDragEnd = useCallback((node: NodeData) => {
    // Release fixed position to let physics take over
    node.fx = undefined;
    node.fy = undefined;
  }, []);

  const handleZoomChange = useCallback(({ k }: { k: number }) => {
    setZoomLevel(k);
  }, []);

  const drawNode = useCallback((node: NodeData, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const isHovered = hoveredNode === node.id;
    const isHome = node.id === 'home';
    const nodeSize = isHome ? (isHovered ? 12 : 9) : (isHovered ? 10 : 7);  // Home node is larger
    const x = node.x || 0;
    const y = node.y || 0;

    // Simple solid circle node
    ctx.beginPath();
    ctx.arc(x, y, nodeSize, 0, 2 * Math.PI);

    // Use matcha colors - home node is darker, all nodes darker when hovered
    ctx.fillStyle = isHovered ? '#7AB87A' : (isHome ? '#8FC68F' : '#A8D5A8');
    ctx.fill();

    // Add subtle shadow for depth
    if (isHovered) {
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Draw label if zoomed in enough or hovering
    if (globalScale > 1.5 || isHovered) {
      ctx.font = `${Math.max(12, 14 / globalScale)}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Dark text on white background
      ctx.fillStyle = '#333333';

      const labelOpacity = isHovered ? 1 : Math.min(1, (globalScale - 1.5) / 1.5);
      ctx.globalAlpha = labelOpacity;
      ctx.fillText(node.label, x, y + nodeSize + 15);
      ctx.globalAlpha = 1;
    }
  }, [hoveredNode]);

  const drawLink = useCallback((link: any, ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = '#A8D5A840';  // Light matcha green with transparency
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    ctx.stroke();
  }, []);

  return (
    <GraphContainer isVisible={isVisible}>
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData as any}
        nodeLabel=""
        nodeCanvasObject={drawNode}
        nodePointerAreaPaint={(node: any, color: string, ctx: CanvasRenderingContext2D) => {
          // Increase hover area for better detection
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 15, 0, 2 * Math.PI);
          ctx.fill();
        }}
        linkCanvasObject={drawLink}
        onNodeClick={handleNodeClick}
        onNodeDrag={handleNodeDrag}
        onNodeDragEnd={handleNodeDragEnd}
        onNodeHover={(node: any) => setHoveredNode(node ? node.id : null)}
        onZoomEnd={handleZoomChange}
        enableNodeDrag={true}
        enablePanInteraction={true}
        enableZoomInteraction={true}
        minZoom={0.5}
        maxZoom={5}
        backgroundColor="transparent"
        width={window.innerWidth}
        height={window.innerHeight}
        cooldownTicks={100}
        warmupTicks={100}
      />
    </GraphContainer>
  );
};

export default NetworkGraph;