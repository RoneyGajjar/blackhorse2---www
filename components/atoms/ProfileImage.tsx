interface ProfileImageProps {
    src: string;
    alt: string;
    className?: string;
}

const ProfileImage = ({
    src,
    alt,
    className = "",
}: ProfileImageProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`
        w-full
        h-[420px]
        object-cover
        rounded-lg
        grayscale
        hover:grayscale-0 
        transition-all
        duration-300
        ${className}
      `}
        />
    );
};

export default ProfileImage;