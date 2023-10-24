import titleBottomImg from '../../../assets/img/bg/circle_left.png'
const SectionTitle = ({titlefirst,titleSec, className})=> {
    return ( 
        <div className={`section-title cta-title mt-10 mb-35 ${className}`}>
            <h2>{titlefirst} <span>{titleSec}</span></h2>
            <img src={titleBottomImg} alt="circle left" />
        </div>
     );
}

export default SectionTitle;