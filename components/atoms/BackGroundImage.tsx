interface BackgroundImageProps {
    image: string;
    alt?: string;
    className?: string;
    children?: React.ReactNode;
}

const BackgroundImage = ({
    image,
    alt = "background image",
    className = "",
    children,
}: BackgroundImageProps) => {
    return (
        <div
            className={`
        relative
        bg-cover
        bg-center
        bg-no-repeat
        ${className}
      `}
            style={{
                backgroundImage: `url(${image})`,
            }}
            aria-label={alt}
        >
            {children}
        </div>
    );
};

export default BackgroundImage;