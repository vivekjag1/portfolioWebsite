
import FrameworkComponent from "../components/FrameworkComponent.tsx";

import bounce from "../assets/bounce-image-full.png"
import linux from "../assets/linux.svg"
import qemu from "../assets/qemu-logo.svg"
import AOSP from "../assets/AOSP-logo.svg"
import arm from "../assets/arm-logo.svg"

export default function Bounce(){
  return(
    <div className="  text-center">
      <h1 className="mb-5 text-4xl text-center font-bold font-arial">Secure Memory Allocator for Linux</h1>
      <h2 className="mb-5 text-lg font-semibold">August 2025 - Present </h2>
      <h3 className="mb-5 text-lg italic"> Cybersecurity, Operating Systems, Memory Allocation, Linux Kernel Development, Technical Research  </h3>
      <h3 className="mb-5 text-lg italic"> Linux, QEMU, ARM MTE, ARM Assembly, AOSP  </h3>
      <img src={bounce} alt="Eris Backer Bounce Allocator Diagram "
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl"/>
      


      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Project Overview</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5 ">
            As part of my senior capstone project at Worcester Polytechnic Institute (WPI), I'm currently working with Professor Robert Walls and two other students to develop the Bounce Allocator - A secure Kernel Memory 
            Allocator that uses ARM Memory Tagging Extension (MTE) to mitigate temporal memory errors.
            The Bounce Allocator's architecture was originally developed by Eris Backer, and our research team is further refining the idea and implementing it in the Linux Kernel. 
            Our project is being developed using QEMU, Linux, and AOSP. We are deploying our custom memory allocator to the Google Pixel 9A, one of the few commercially available 
            Linux-based devices that support ARM MTE.

             


        </p>
      </div>
      <h1 className="mb-5 mt-10 text-3xl font-bold font-arial">The Technology Stack</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:mb-10 md:mb-5 sm:mb-3 ">
        <FrameworkComponent imageString={linux} imageAlt={"Linux Kernel"} description={"Linux Kernel"}/>
        <FrameworkComponent imageString={qemu} imageAlt={"QEMU"} description={"QEMU"}/>
        <FrameworkComponent imageString={AOSP} imageAlt={"AOSP"} description={"AOSP"}/>
        <FrameworkComponent imageString={arm} imageAlt={"ARM MTE"} description={"ARM MTE"}/>
      </div> 
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">

        The most significant part of our technology stack is ARM Memory Tagging Extension (MTE), released as part of the ARMv8.5 standard.
        With MTE, tags are embedded in both pointers and memory locations, and on 
        a pointer de-reference, they are checked to ensure that the tags are equal. 
        MTE can be leveraged to prevent a range of temporal memory safety errors, including use after free, as the system changes the tag 
        associated with the newly freed memory, causing a tag mismatch on a pointer dereference. 
        An important feature of MTE is that it is implemented in the hardware, meaning that tag checks have minimal overhead, 
        and do not have to be implemented manually by developers. 

        MTE is especially useful to our project given the threat model. In the DirtyCred attack, an attacker aims to create a dangling pointer 
        to a credential structure using a use-after-free attack. MTE can stop this type of attack by encoding a specific tag in memory once it is freed, and is one of the many security benefits of the bounce allocator. 



        <br></br>
        <br></br>
         Creating the development environment was one of the most significant challenges that we have encountered while completing this project. We needed a way to emulate ARM assembly instructions while working on x86 systems. Furthermore, we needed our emulator to support MTE instructions so that we could enforce tag checks on pointer de-references. This led us to utilize QEMU as our local development tool. 
         QEMU provides a close emulation of the target hardware, and more importantly, enables our team to quickly test our custom kernels with userland applications.
         Thus far, we have used QEMU to develop custom kernel modules, system calls, and the Bounce Allocator itself.
         QEMU has also been useful in providing a standardized platform for each of us to develop on.
         <br></br>
         <br></br>
          Our target device is the Pixel 9A (codename Tegu). 
         The Pixel 8 series first introduced ARM MTE (which was introduced as part of ARMv8.5), and then improved upon the technology in the Pixel 9 lineup. 
         We chose the Pixel 9A due to its affordability, and the minimal effort required to make modifications to the device's kernel. 
         Currently, the Pixel series is the only Android based device which includes support for ARM MTE. 
           
           
        Recently, Apple recently announced that the iPhone 17 line of devices will begin using EMTE, a modified version of MTE that Apple developed in collaboration with ARM. 
        We hope to explore Apple's implementation of MTE and memory security later on in our project.


       

        </p>
      </div>
      
      <h1 className="mb-5 mt-10 text-3xl font-bold font-arial">Current Progress</h1>

        

  <div className="flex flex-col items-center justify-center">
  <div className="text-lg text-left md:w-1/2 ml-5 mr-5">
    <p>
      We're still in the early stages of our research, but our end goal is to contribute the Bounce Allocator to the Linux Kernel. 
      We truly hope that the bounce allocator is seen as the next secure memory allocator for mission critical applications and for sensitive information.
    </p>

    <p className="mt-4">As of September 2025, we have researched:</p>
    <ul className="list-disc list-inside mt-2">
      <li>Memory Tagging Extension (MTE) and associated side channel attacks</li>
      <li>The DirtyCred attack and other memory based attacks</li>
      <li>Kernel Development conventions, benchmarking, and testing standards</li>
      <li>The Linux Slab Allocator</li>
      <li>Possible attacks against the Bounce Allocator</li>
      <li>Apple's introduction of EMTE and Memory Integrity Enforcement</li>
    </ul>

    <br></br>

    <p>Additionally, we've developed several modifications to the Linux Kernel and standalone programs including: </p>
     <ul className="list-disc list-inside mt-2">
      <li>A working user space implementation of the Linux Slab allocator</li>
      <li>A user space implementation  of the bounce allocator</li>
      <li>Test cases, with code coverage files, using Unity</li>
      <li>Custom System Call</li>
      <li>Custom Kernel Module</li>
      <li>Apple's introduction of EMTE and Memory Integrity Enforcement</li>
    </ul>
    <p>In the next weeks and months of this project, we hope to continue developing the kernel space implementation of the bounce allocator, 
        and explore the possibility of creating a user-space variant on iOS. 
        Furthermore, we hope to explore additional modifications to increase the security guarantees provided by the bounce allocator. 
        Finally, we hope to learn more about novel memory safety  solutions, and incorporate them into the bounce allocator. 

    </p>

  </div>
</div>
</div>

  )
}