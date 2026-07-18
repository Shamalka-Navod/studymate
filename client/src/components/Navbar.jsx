function Navbar(){

  return (

    <header className="
      bg-white
      rounded-2xl
      shadow-sm
      p-5
      flex
      justify-between
      items-center
    ">

      <div>
        <h2 className="
          text-2xl
          font-bold
          text-gray-800
        ">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500">
          Manage your study notes easily
        </p>

      </div>


      <div className="
        w-12
        h-12
        rounded-full
        bg-purple-600
        text-white
        flex
        items-center
        justify-center
        font-bold
      ">
        S
      </div>


    </header>

  )

}


export default Navbar;