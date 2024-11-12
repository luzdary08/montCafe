

export default function InformationItem({title,description,Icon}) {
    return (
        <div className='information__item'>
            <div className="information__circle">
                <Icon />
            </div>
            <div>
                <p className="information__text">{title}</p>
                <p className="information__text">{description}</p>
            </div>
        </div>
    )
}
