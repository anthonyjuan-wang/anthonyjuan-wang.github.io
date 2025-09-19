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
  const graphRef = useRef<any>(); // ForceGraph2D instance - library doesn't export types
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const animationFrameRef = useRef<number>();
  const nodeAnimationsRef = useRef<Map<string, { currentSize: number; targetSize: number; currentLabelY: number; targetLabelY: number }>>(new Map());
  const [graphData] = useState<GraphData>({
    nodes: [
      { id: 'home', label: 'drag me around!' },  // Central node
      { id: 'about', label: 'about' },
      { id: 'experience', label: 'experience' },
      { id: 'leadership', label: 'leadership' },
      { id: 'projects', label: 'projects' },
      { id: 'contact', label: 'contact' },
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

      // Set initial zoom and center based on screen size
      setTimeout(() => {
        if (fg.zoom) {
          const isMobile = window.innerWidth <= 768;
          const isSmallMobile = window.innerWidth <= 600;

          // Different zoom levels for different screen sizes - slightly adjusted since users can't zoom
          const zoomLevel = isSmallMobile ? 1.4 : isMobile ? 1.7 : 2.2;

          fg.zoom(zoomLevel);  // Responsive zoom
          fg.centerAt(0, 0, 400);  // Center the graph
        }
      }, 100);
    }
  }, []);

  // Trigger re-render for smooth animations
  useEffect(() => {
    if (graphRef.current) {
      const animate = () => {
        // Force a re-render by triggering the render loop
        if (graphRef.current && graphRef.current.pauseAnimation) {
          graphRef.current.pauseAnimation();
          graphRef.current.resumeAnimation();
        }

        // Continue animation if still hovering or dragging
        if (hoveredNode !== null || draggedNode !== null) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      if (hoveredNode !== null || draggedNode !== null) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [hoveredNode, draggedNode]);

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
    // Allow dragging and set dragged state
    setDraggedNode(node.id);
    node.fx = node.x;
    node.fy = node.y;
  }, []);

  const handleNodeDragEnd = useCallback((node: NodeData) => {
    // Release fixed position to let physics take over
    setDraggedNode(null);
    node.fx = undefined;
    node.fy = undefined;
  }, []);

  const handleZoomChange = useCallback(() => {
    // Zoom change handler if needed in future
  }, []);

  const drawNode = useCallback((node: NodeData, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const isHovered = hoveredNode === node.id || draggedNode === node.id;
    const activeNode = hoveredNode || draggedNode;
    const isHome = node.id === 'home';
    const x = node.x || 0;
    const y = node.y || 0;

    // Check if this node is connected to the active node
    // Links can have either string IDs or object references after D3 processing
    const isConnected = activeNode ? (
      graphData.links.some(link => {
        const sourceId = typeof link.source === 'string' ? link.source : (link.source as any).id;
        const targetId = typeof link.target === 'string' ? link.target : (link.target as any).id;
        return (sourceId === activeNode && targetId === node.id) ||
               (targetId === activeNode && sourceId === node.id);
      })
    ) : false;

    // Determine if node should be greyed out (not connected and not the hovered node)
    const shouldGrey = activeNode && !isConnected && !isHovered;

    // Get or initialize animation state for this node
    if (!nodeAnimationsRef.current.has(node.id)) {
      const baseSize = isHome ? 9 : 7;
      nodeAnimationsRef.current.set(node.id, {
        currentSize: baseSize,
        targetSize: baseSize,
        currentLabelY: y + baseSize + 15,
        targetLabelY: y + baseSize + 15
      });
    }

    const animState = nodeAnimationsRef.current.get(node.id)!;

    // Set target sizes based on hover state
    const baseSize = isHome ? 9 : 7;
    const hoverSize = isHome ? 12 : 10;
    animState.targetSize = isHovered ? hoverSize : baseSize;
    animState.targetLabelY = y + animState.targetSize + 15;

    // Smooth animation interpolation
    const animSpeed = 0.2;
    animState.currentSize += (animState.targetSize - animState.currentSize) * animSpeed;
    animState.currentLabelY += (animState.targetLabelY - animState.currentLabelY) * animSpeed;

    // Draw node with animated size
    ctx.beginPath();
    ctx.arc(x, y, animState.currentSize, 0, 2 * Math.PI);

    // Color logic: green when hovered, light grey when not connected, normal grey for connected/default
    if (isHovered) {
      ctx.fillStyle = '#7AB87A';  // Green when hovered
    } else if (shouldGrey) {
      ctx.fillStyle = '#E0E0E0';  // Light grey when not connected
    } else {
      ctx.fillStyle = isHome ? '#888888' : '#AAAAAA';  // Normal grey (includes connected nodes)
    }
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
      ctx.font = `bold ${Math.max(14, 16 / globalScale)}px -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Grey out text for non-connected nodes
      ctx.fillStyle = shouldGrey ? '#D0D0D0' : '#333333';

      const baseOpacity = isHovered ? 1 : Math.min(1, (globalScale - 1.5) / 1.5);
      const labelOpacity = shouldGrey ? baseOpacity * 0.3 : baseOpacity;
      ctx.globalAlpha = labelOpacity;
      ctx.fillText(node.label, x, animState.currentLabelY);
      ctx.globalAlpha = 1;
    }
  }, [hoveredNode, draggedNode, graphData.links]);

  const drawLink = useCallback((link: any, ctx: CanvasRenderingContext2D) => {
    // Check if either end of the link is hovered or dragged
    const activeNode = hoveredNode || draggedNode;
    const isHighlighted = activeNode && (link.source.id === activeNode || link.target.id === activeNode);
    const shouldGrey = activeNode && !isHighlighted;

    // Color edges based on state
    if (isHighlighted) {
      ctx.strokeStyle = '#7AB87A90';  // Green when connected to active node
      ctx.lineWidth = 2.5;
    } else if (shouldGrey) {
      ctx.strokeStyle = '#E0E0E020';  // Very light grey when not connected
      ctx.lineWidth = 1;
    } else {
      ctx.strokeStyle = '#CCCCCC40';  // Normal grey
      ctx.lineWidth = 1.5;
    }

    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    ctx.stroke();
  }, [hoveredNode, draggedNode]);

  return (
    <GraphContainer isVisible={isVisible}>
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData as any}
        nodeLabel=""
        nodeCanvasObject={drawNode}
        nodePointerAreaPaint={(node: NodeData, color: string, ctx: CanvasRenderingContext2D) => {
          // Increase hover area for better detection
          const x = node.x || 0;
          const y = node.y || 0;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(x, y, 15, 0, 2 * Math.PI);
          ctx.fill();
        }}
        linkCanvasObject={drawLink}
        onNodeClick={handleNodeClick}
        onNodeDrag={handleNodeDrag}
        onNodeDragEnd={handleNodeDragEnd}
        onNodeHover={(node: NodeData | null) => setHoveredNode(node ? node.id : null)}
        onZoomEnd={handleZoomChange}
        enableNodeDrag={true}
        enablePanInteraction={false}
        enableZoomInteraction={false}
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