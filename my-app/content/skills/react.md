---
name: React
slug: react
level: Advanced
icon: ⚛️
yearsOfExperience: 2
category: Frontend
color: from-cyan-500/20 to-blue-500/20
---

# React

React is my primary frontend framework for building modern, interactive web applications. I've spent 2 years mastering React, from basic components to advanced patterns like custom hooks, context API, and performance optimization.

## Expertise Areas

### Core React Concepts
- **Components & Props** - Reusable, composable UI building blocks
- **State Management** - useState, useReducer, Context API
- **Hooks** - Custom hooks for reusable logic
- **Lifecycle & Effects** - useEffect, cleanup functions
- **Event Handling** - Synthetic events and form handling

### Advanced Patterns
- **Custom Hooks** - Extracting reusable stateful logic
- **Compound Components** - Flexible, composable component APIs
- **Render Props & HOCs** - Component composition patterns
- **Error Boundaries** - Graceful error handling
- **Code Splitting** - Lazy loading and React.Suspense

### State Management
- **Context API** - Global state without prop drilling
- **useReducer** - Complex state logic
- **React Query** - Server state management
- **Local Storage Integration** - Persistent state

### Performance Optimization
- **React.memo** - Preventing unnecessary re-renders
- **useMemo & useCallback** - Memoization for expensive operations
- **Virtual DOM Understanding** - How React efficiently updates the UI
- **Profiler API** - Measuring component performance

## Projects Using React

### This Portfolio Website
**Technologies**: Next.js 16, React, TypeScript, shadcn/ui
Built a modern, animated portfolio with:
- Server and client component architecture
- Framer Motion animations
- Dynamic routing for projects and skills
- Fully responsive design
- shadcn/ui component library integration

### Workout Tracker Application
**Technologies**: React, Chart.js, Local Storage
Created a comprehensive fitness tracking app:
- Custom hooks for workout management
- Interactive charts for progress tracking
- Form validation with controlled components
- Persistent state with localStorage
- Mobile-responsive PWA features

### GamingHub - Real-time Gaming Platform
**Technologies**: React, Socket.io, Express
Built a multiplayer gaming interface:
- Real-time state updates via WebSockets
- Game lobby with live player lists
- Chat system with React components
- Smooth animations and transitions

## Professional Experience

### Techr2 - Full Stack Development Intern
- Built React dashboards for data destruction compliance
- Implemented complex forms with validation
- Optimized React components reducing render times by 40%
- Integrated REST APIs with React Query

## Coursework Applications

### CS50W - Web Programming
- Built single-page applications with React
- Implemented client-side routing
- Created reusable component libraries

### Advanced Web Development
- Studied React architecture and virtual DOM
- Implemented complex state management patterns
- Built accessible React applications

## Certifications

- **React - The Complete Guide 2024** (Udemy, December 2024)
  - Hooks, Context API, and advanced patterns
  - Performance optimization techniques
  - Testing React applications

## Code Examples

### Custom Hook for Data Fetching
```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <div>{data.name}</div>;
}
```

### Context API for Theme Management
```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### Optimized List Component
```jsx
import { memo, useMemo } from 'react';

const ListItem = memo(({ item, onDelete }) => (
  <div className="list-item">
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <button onClick={() => onDelete(item.id)}>Delete</button>
  </div>
));

function OptimizedList({ items, onDelete }) {
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }, [items]);

  return (
    <div>
      {sortedItems.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
```

## Why I Love React

React's component-based architecture makes building complex UIs feel intuitive and maintainable. The declarative approach means I describe *what* the UI should look like, not *how* to update it. The ecosystem is massive - whether I need routing, state management, animations, or forms, there's a well-maintained solution. The hooks API revolutionized how I write React code, making it cleaner and more reusable.

## Current Focus

- **Next.js 15+** - Server components and app router
- **TypeScript** - Type-safe React applications
- **Testing** - React Testing Library and Jest
- **Accessibility** - WCAG compliance and ARIA attributes
- **Performance** - Advanced optimization techniques
