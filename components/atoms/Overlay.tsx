interface OverlayProps {
    className?: string;
}

const Overlay = ({ className = "" }: OverlayProps) => {
    return (
        <div
            className={`
        absolute
        inset-0
        bg-black/80
        z-10
        ${className}
      `}
        />
    );
};

export default Overlay;