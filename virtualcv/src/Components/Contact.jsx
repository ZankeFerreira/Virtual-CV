export default function Contact(props){
    return(
        
        <div  className={props.className}>
             <h3> Contact Information    </h3>
            <ul> 
                {/* <li>Phone number: 067 958 2281</li> */}
                <li>Email: </li>
                <li><a href="https://linkedin.com/in/zanke-ferreira-6a7354362/" target="_blank">LinkedIn</a> </li>
                <li><a href="https://github.com/ZankeFerreira" target="_blank">GitHub</a> </li>
            </ul>
        </div>
        
    )
}