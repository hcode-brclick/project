import Link from "next/link";
import { MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                BrasilTour
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Descubra os tesouros escondidos do interior do Brasil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Explorar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/explorar?regiao=Norte"
                  className="hover:text-foreground transition-colors"
                >
                  Região Norte
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar?regiao=Nordeste"
                  className="hover:text-foreground transition-colors"
                >
                  Região Nordeste
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar?regiao=Centro-Oeste"
                  className="hover:text-foreground transition-colors"
                >
                  Região Centro-Oeste
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar?regiao=Sudeste"
                  className="hover:text-foreground transition-colors"
                >
                  Região Sudeste
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar?regiao=Sul"
                  className="hover:text-foreground transition-colors"
                >
                  Região Sul
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/explorar?categoria=Cachoeiras"
                  className="hover:text-foreground transition-colors"
                >
                  Cachoeiras
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar?categoria=Trilhas"
                  className="hover:text-foreground transition-colors"
                >
                  Trilhas
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar?categoria=Gastronomia"
                  className="hover:text-foreground transition-colors"
                >
                  Gastronomia
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar?categoria=Historia"
                  className="hover:text-foreground transition-colors"
                >
                  História
                </Link>
              </li>
              <li>
                <Link
                  href="/explorar?categoria=Ecoturismo"
                  className="hover:text-foreground transition-colors"
                >
                  Ecoturismo
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>2026 BrasilTour. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
