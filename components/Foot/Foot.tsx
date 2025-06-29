

const footItems = [
    "About us",
    "Location",
    "Jobs",
    "Data & Privacy",
    "Contact"
]
export default function Foot(){

    return(
        <div className="flex gap-16 pt-4 justify-center h-[15%] bg-white border-t border-gray-300">
            {footItems.map((f,indx)=>(
                <p className="mr-4 text-gray-600 text-2xl font-semibold hover:text-gray-800 hover:cursor-pointer"
                 key={`${indx}_${f}`}>{f}</p>
            ))}
        </div>
    );
}