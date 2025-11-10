import type { LucideIcon } from "lucide-react";

// components/BottomNavButton.tsx
type BottomNavButtonVariant = "icon" | "price";

interface BottomNavButtonProps {
    variant?: BottomNavButtonVariant;
    icon?: LucideIcon;
    label?: string;
    price?: string;
    subtitle?: string;
    className?: string;
    onClick?: () => void;
}

export default function BottomNavButton({
    variant = "icon",
    icon: Icon,
    label,
    price,
    subtitle,
    className = "",
    onClick,
}: BottomNavButtonProps) {
    const baseClasses = "flex flex-col text-white transition-all cursor-pointer";

    const variantClasses = {
        icon: "p-2",
        price: "flex-1 items-center justify-center gap-0.5 bg-app-primary rounded-lg",
    };

    const content = {
        icon: (
            <>
                {Icon && <Icon className="size-5" />}
                {label && <span className="text-[9px] mt-1">{label}</span>}
            </>
        ),
        price: (
            <>
                {price && <span className="font-bold text-base">{price}</span>}
                {subtitle && <span className="text-[9px]">{subtitle}</span>}
            </>
        ),
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
        >
            {content[variant]}
        </button>
    );
}