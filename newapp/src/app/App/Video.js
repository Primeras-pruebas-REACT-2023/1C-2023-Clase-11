export default function Reproduccion (prop){
    return(
        <video width={prop.width} height={prop.height} controls>
            <source src={prop.url} type={prop.type}></source>
        </video>
    )
}