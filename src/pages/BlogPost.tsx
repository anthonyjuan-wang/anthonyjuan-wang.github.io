import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface BlogContent {
  title: string;
  date: string;
  content: string;
  readTime: string;
  tags: string[];
}

const PostContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--white-soft) 0%, var(--matcha-light) 100%);
  padding: 100px 20px 50px;
`;

const PostWrapper = styled.article`
  max-width: 700px;
  margin: 0 auto;
  background: var(--white-soft);
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(122, 184, 122, 0.15);
`;

const PostHeader = styled(motion.header)`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--matcha-light);
`;

const PostTitle = styled.h1`
  color: var(--matcha-dark);
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 20px;
  color: var(--matcha-medium);
  font-size: 0.95rem;
`;

const PostContent = styled(motion.div)`
  color: #333;
  line-height: 1.8;
  font-size: 1.1rem;

  h1, h2, h3, h4, h5, h6 {
    color: var(--matcha-dark);
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    border-bottom: 1px solid var(--matcha-light);
    padding-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--matcha-accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background: var(--matcha-light);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
  }

  pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1.5rem;

    code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
  }

  blockquote {
    border-left: 4px solid var(--matcha-accent);
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
    color: #666;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    margin: 2rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
  }

  th, td {
    border: 1px solid var(--matcha-light);
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background: var(--matcha-light);
    font-weight: 600;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--matcha-accent);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(-5px);
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: var(--matcha-light);
  color: var(--matcha-dark);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
`;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Blog content - in the future, this can be loaded dynamically
    if (slug === 'welcome-to-my-blog') {
      setPost({
          title: 'Welcome to My Blog',
          date: '2024-01-15',
          readTime: '3 min read',
          tags: ['Introduction', 'Personal'],
          content: `
# Welcome to My Blog

I'm excited to share my journey in software engineering and technology through this blog. Here, you'll find articles about:

## Topics I'll Cover

- **Software Engineering Best Practices**: Lessons learned from real-world projects
- **Technology Deep Dives**: Exploring new technologies and frameworks
- **Career Development**: Insights from internships and professional growth
- **Personal Projects**: Behind-the-scenes of my side projects

## Why I'm Writing

Writing helps me consolidate my learning and share knowledge with the community. Through my experiences at companies like Shopify and Standard BioTools, I've learned valuable lessons that I believe can help others on their journey.

### What to Expect

1. **Technical Tutorials**: Step-by-step guides for solving common problems
2. **Case Studies**: Real-world examples from my work experience
3. **Opinion Pieces**: My thoughts on industry trends and best practices
4. **Learning Resources**: Curated lists of helpful resources

## Code Example

Here's a simple example of the kind of content you'll find:

\`\`\`javascript
// Example of a React hook for scroll animation
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};
\`\`\`

## Connect With Me

Feel free to reach out if you have questions or want to discuss any topics. You can find me on GitHub, LinkedIn, or send me an email.

> "The best way to learn is to teach" - Richard Feynman

Stay tuned for more posts coming soon!
          `
      });
    } else {
      // Add more blog posts here as you create them
      setPost(null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <PostContainer>
        <PostWrapper>
          <p>Loading...</p>
        </PostWrapper>
      </PostContainer>
    );
  }

  if (!post) {
    return (
      <PostContainer>
        <PostWrapper>
          <p>Post not found</p>
          <BackLink to="/blog">← Back to Blog</BackLink>
        </PostWrapper>
      </PostContainer>
    );
  }

  return (
    <PostContainer>
      <PostWrapper>
        <BackLink to="/blog">← Back to Blog</BackLink>

        <PostHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </PostMeta>
          <TagContainer>
            {post.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        </PostHeader>

        <PostContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </PostContent>
      </PostWrapper>
    </PostContainer>
  );
};

export default BlogPost;