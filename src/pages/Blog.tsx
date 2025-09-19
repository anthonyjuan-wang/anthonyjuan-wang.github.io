import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../hooks/useScrollAnimation';

const BlogContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--white-soft) 0%, var(--matcha-light) 100%);
  padding: 100px 20px 50px;
`;

const BlogHeader = styled(motion.h1)`
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--matcha-dark);
  margin-bottom: 60px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const BlogGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const BlogCard = styled(motion.article)`
  background: var(--white-soft);
  border-radius: 2rem;
  padding: 2rem;
  border: 2px solid var(--matcha-light);
  box-shadow: 0 10px 30px rgba(122, 184, 122, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(122, 184, 122, 0.25);
    border-color: var(--matcha-accent);
  }
`;

const PostTitle = styled.h2`
  color: var(--matcha-dark);
  margin-bottom: 10px;
  font-size: 2rem;
  line-height: 1.2;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  color: var(--matcha-medium);
  font-size: 0.9rem;
`;

const PostExcerpt = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: var(--matcha-light);
  color: var(--matcha-dark);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
`;

const ReadMoreLink = styled(Link)`
  color: var(--matcha-accent);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const Blog: React.FC = () => {
  // Blog posts data - you can add more posts here
  const posts = [
      {
        slug: 'welcome-to-my-blog',
        title: 'Welcome to My Blog',
        date: '2024-01-15',
        excerpt: 'An introduction to my personal blog where I share thoughts on software engineering, technology trends, and personal growth.',
        readTime: '3 min read',
        tags: ['Introduction', 'Personal']
      }
    ];

  return (
    <BlogContainer>
      <BlogHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        blog
      </BlogHeader>

      <BlogGrid>
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <BlogCard>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </PostMeta>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <TagContainer>
                {post.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
              <div style={{ marginTop: '20px' }}>
                <ReadMoreLink to={`/blog/${post.slug}`}>
                  Read more →
                </ReadMoreLink>
              </div>
            </BlogCard>
          </motion.div>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;