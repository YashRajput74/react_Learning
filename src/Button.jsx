export default function Button({classGiven,label,onHit}){
    return (
        <button className={classGiven} onClick={onHit}>
            {label}
        </button>
    )
}