import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const posts = [
    {
      title: "First Blog Post",
      excerpt: "This is the excerpt for the first blog post.",
    },
    {
      title: "Second Blog Post",
      excerpt: "This is the excerpt for the second blog post.",
    },
    {
      title: "Third Blog Post",
      excerpt: "This is the excerpt for the third blog post.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
              <Button variant="link" className="mt-4">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;