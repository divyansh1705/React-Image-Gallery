import { useParams } from "react-router";
import GetGalleryImage from "./ImageById";

function BigImage(){
    
    const {id} = useParams();
    const {individualData , setIndividualData} = GetGalleryImage(id);

    
    return (
        <div className="shadow-[0_0_10px_black] w-fit mx-auto mt-20 flex gap-4 items-start justify-center p-5 rounded-lg">
            {/* Printing the image */}
            <div>
            <img src={individualData.url} alt="Photo" height="400px" width="500px" />
            </div>
            <div className="flex flex-col items-start justify-center w-fit my-auto">
            <h1 className="font-semibold tracking-wider text-lg pt-5"> Title : {individualData.title}</h1>
            <p className=""> <span className="font-semibold tracking-wider text-lg pt-5" > Description :</span> {individualData.description}</p>
            </div>
        </div>
    )
}
export default BigImage;