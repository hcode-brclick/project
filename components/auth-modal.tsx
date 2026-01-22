"use client";

import React from "react"

import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsLoading(true);
    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 500));
    login(name, email);
    setIsLoading(false);
    onOpenChange(false);
    setName("");
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] mb-2">
            <MapPin className="h-7 w-7 text-white" />
          </div>
          <DialogTitle className="text-2xl gradient-text">
            Bem-vindo ao BrasilTour
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Entre para salvar seus lugares favoritos e personalizar sua
            experiência.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full btn-cta rounded-full h-11"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Esta é uma versão demonstrativa. Não armazenamos dados sensíveis.
        </p>
      </DialogContent>
    </Dialog>
  );
}
