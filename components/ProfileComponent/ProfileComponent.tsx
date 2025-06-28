

export default function ProfileComponent(){

    return(
        <>
            <div className="flex gap-4">
                <div className="pt-2 mr-4">
                    <img className="h-10 w-auto" src="./cart.png" alt="cart"/>
                </div>
                <div>
                    <img className="h-16 w-auto" src="./profile.png" alt="Profile pic"/>
                </div>
              <div className="flex">
                  <div >
                    <p className="text-black text-lg ">Ricardo Collado</p>
                    <div className="flex gap-2">
                        <img className="h-5 w-auto" src="./location.png"/>
                        <p className="text-gray-400 text-sm">Santo Domingo Este</p>
                    </div>
                </div>
                <div className="pt-2 pr-2">
                    <img className="h-2 w-auto" src="./vector.png" alt="vector"/>
                </div>
              </div>
            </div>
        </>
    );
}