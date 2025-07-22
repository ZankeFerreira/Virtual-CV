export default function Header(props){
    return(
        <header>
            <h1 /*style={{"font-family": props.font}}*/>
                Zanke Ferreira

            </h1>
            <h2 style={{"font-style": props.font,fontWeight: "normal"}}>
                Junior developer
            </h2>
        </header>
    )
}