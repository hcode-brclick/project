"use client";

import React from "react"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  initialValue?: string;
}

export function SearchBar({
  className = "",
  placeholder = "Buscar por nome, cidade ou estado...",
  initialValue = "",
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/explorar?busca=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/explorar");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-12 pr-24 h-14 rounded-full text-base shadow-lg border-0 bg-white"
      />
      <Button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 btn-cta rounded-full h-10 px-6"
      >
        Buscar
      </Button>
    </form>
  );
}
