type BadgeProps = {
    text: string;
    color: string;
}

export const Badge: React.FC<BadgeProps> = ({text, color}) => {
    return (
        <span className={`px-4 py-1 ${color} rounded-full text-[12px] text-white`}>
            {text}
        </span>
    )
}