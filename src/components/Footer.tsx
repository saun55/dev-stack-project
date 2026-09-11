import footerLogo from '../assets/logo-text.png' 

const Footer=()=>{
return(

//   <div>
//         <div className='flex justify-between container mx-auto gap-2.5 py-20'>
//             {/* 1st */}
//              <div className='space-y-4'>
//               <img src={footerLogo} alt="footerLogoDevStack" />
//               <p>Curated tools, technologies, and resources for developers building
// modern software.</p>
//                    <ul className='flex gap-2 font-semibold'>
//                     <li><a href="">GitHub</a></li>
//                     <li><a href="">Twitter</a></li>
//                     <li><a href="">LinkedIn</a></li>
//                    </ul>
//              </div>

//            {/* 2nd */}
//                <div className='space-y-2.5'>
//                     <h1 className='font-semibold text-[15px]'>PRODUCT</h1>
//                   <ul>
//                     <li><a href="">Home</a></li>
//                     <li><a href="">Technologies</a></li>
//                     <li><a href="">Projects</a></li>
                    
//                     </ul>
//                </div>

//           {/* 3rd */}

//                        <div className='space-y-2.5'>
//                         <h1 className='font-semibold'>COMPANY</h1>
// <ul>
//                 <li><a href="">About</a></li> 
//                <li><a href="">Contact</a></li> 
//                <li><a href="">Careers</a></li> 
                       
//                  </ul>        
//                        </div>
//          {/* 4th */}



//        <div className='space-y-2.5'>

//                <h1 className='font-semibold'>LEGAL</h1>
//                <ul>
//                <li> <a href="">Privacy Policy</a></li>
//               <li><a href="">Terms of Service</a></li>
//                </ul>

//        </div>

//         </div>
//            {/* Copy Right */}



// <footer className=" sm:footer-horizontal  bg-base-300 text-base-content p-8">
//   <aside className='flex justify-between container mx-auto'>
//     <p>©{new Date().getFullYear()} Dev Stack.  All rights reserved.</p>
//     <div className='flex gap-3'>
//       <p>Privacy</p>
//       <p>Terms</p>
//     </div>
//   </aside>
// </footer>

// </div>
<div>
  {/* Footer Main */}
  <div className="container mx-auto grid grid-cols-2 gap-10 px-4 py-16 md:grid-cols-4 lg:flex lg:justify-between">
    
    {/* 1st */}
    <div className="space-y-4 lg:max-w-sm">
      <img src={footerLogo} alt="DevStack Footer Logo" />

      <p className="leading-7 text-gray-600">
        Curated tools, technologies, and resources for developers building
        modern software.
      </p>

      <ul className="flex gap-4 font-semibold">
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">LinkedIn</a>
        </li>
      </ul>
    </div>

    {/* 2nd */}
    <div className="space-y-4">
      <h2 className="font-semibold text-[15px]">PRODUCT</h2>

      <ul className="space-y-2.5">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Technologies</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
    </div>

    {/* 3rd */}
    <div className="space-y-4">
      <h2 className="font-semibold text-[15px]">COMPANY</h2>

      <ul className="space-y-2.5">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
      </ul>
    </div>

    {/* 4th */}
    <div className="space-y-4">
      <h2 className="font-semibold text-[15px]">LEGAL</h2>

      <ul className="space-y-2.5">
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Terms of Service</a>
        </li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <footer className="bg-base-300 p-6 text-base-content">
    <div className="container mx-auto flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>

      <div className="flex gap-4">
        <p>Privacy</p>
        <p>Terms</p>
      </div>
    </div>
  </footer>
</div>
)
}

export default Footer