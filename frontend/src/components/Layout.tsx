import { Package } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-slate-100 flex">

            <aside
                className="
                    w-64
                    bg-slate-900
                    text-white
                    p-6
                "
            >
                <div className="flex items-center gap-3 mb-10">

                    <Package size={30} />

                    <h1 className="text-xl font-bold">
                        Estoque
                    </h1>

                </div>

                <nav>
                    <ul className="space-y-2">

                        <li>
                            <Link
                                to="/"
                                className="
                                    block
                                    px-4
                                    py-3
                                    rounded
                                    hover:bg-slate-800
                                "
                            >
                                Produtos
                            </Link>
                        </li>

                    </ul>
                </nav>

            </aside>

            <main className="flex-1 p-8">
                {children}
            </main>

        </div>
    );
}

export default Layout;