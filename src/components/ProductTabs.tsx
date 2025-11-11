// src/components/ProductTabs.tsx
import { useState, useEffect } from "react";

const TABS = [
    { id: "overview", label: "Overview" },
    { id: "reviews", label: "Reviews" },
    { id: "description", label: "Description" },
    { id: "recommendations", label: "Recomendações" },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface ProductTabsProps {
    defaultTab?: TabId;
    onChange?: (tab: TabId) => void;
}

export default function ProductTabs({
    defaultTab = "overview",
    onChange,
}: ProductTabsProps = {}) {
    const [active, setActive] = useState<TabId>(defaultTab);

    // Sincroniza com hash da URL (ex: #reviews)
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash && TABS.some((tab) => tab.id === hash)) {
                setActive(hash as TabId);
                scrollToSection(hash as TabId);
            }
        };

        handleHashChange(); // ao carregar
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const scrollToSection = (id: TabId) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleClick = (id: TabId) => {
        setActive(id);
        onChange?.(id);
        scrollToSection(id);

        // Atualiza URL com hash (sem recarregar)
        window.history.pushState(null, "", `#${id}`);
    };

    return (
        <nav
            className="flex overflow-x-auto scrollbar-hide border-b border-primary/10"
            role="tablist"
            aria-label="Seções do produto"
        >
            {TABS.map((tab) => {
                const isActive = active === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => handleClick(tab.id)}
                        className={`
              px-4 py-1 text-sm font-medium whitespace-nowrap transition-all
              ${isActive
                                ? "text-primary border-b-2 border-primary"
                                : "text-primary/60 hover:text-primary/80 border-b-2 border-transparent"
                            }
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
            `}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`panel-${tab.id}`}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </nav>
    );
}