
import FrameworkComponent from "../components/FrameworkComponent.tsx";

import bounce from "../assets/bounce-image-full.png"
import linux from "../assets/linux.svg"
import qemu from "../assets/qemu-logo.svg"
import AOSP from "../assets/AOSP-logo.svg"
import arm from "../assets/arm-logo.svg"
import dockerLogo from "../assets/docker.svg"

export default function Bounce(){
  return(
    <div className="  bg-[#184B40] text-center text-white">
      <h1 className="mb-5 text-4xl text-center font-bold font-arial">Secure Memory Allocator for Linux</h1>
      <h2 className="mb-5 text-lg font-semibold">August 2025 - Present </h2>
      <h3 className="mb-5 text-lg italic"> System Hardening, Operating Systems, Memory Allocation, Kernel Development, Cybersecurity Research </h3>
      <h3 className="mb-5 text-lg italic"> Linux Kernel, QEMU, Docker, ARM Memory Tagging Extension (MTE), ARM Assembly, AOSP  </h3>
      <img src={bounce} alt="Eris Backer Bounce Allocator Diagram "
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl"/>
      
      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Project Overview</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5 ">

          For my Major Qualifying Project (MQP) at Worcester Polytechnic Institute (WPI), I'm working with Professor Robert Walls 
          and two teammates to develop the Bounce Allocator - a secure memory allocator for the Linux Kernel. 

          The Bounce Allocator leverages ARM's Memory Tagging Extension (MTE) to mitigate temporal memory 
          safety errors in the Linux Kernel. 
          
          The architecture for the Bounce Allocator was originally proposed by Eris Backer, and our team 
          is extending and implementing it within the Linux Kernel to improve kernel memory safety while ensuring amortized constant allocation time. 

          Our development process utilizes QEMU, Docker, Bazel, and AOSP for local development, with the 
          Google Pixel 9A serving as the target device given its position as one of few commercially available MTE enabled devices. 
        </p>
      </div>
      <h1 className="mb-5 mt-10 text-3xl font-bold font-arial">The Technology Stack</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:mb-10 md:mb-5 sm:mb-3 ">
        <FrameworkComponent imageString={linux} imageAlt={"Linux Kernel"} description={"Linux Kernel"}/>
        <FrameworkComponent imageString={qemu} imageAlt={"QEMU"} description={"QEMU"}/>
        <FrameworkComponent imageString={AOSP} imageAlt={"AOSP"} description={"AOSP"}/>
        <FrameworkComponent imageString={arm} imageAlt={"ARM MTE"} description={"ARM MTE"}/>
        <FrameworkComponent imageString={dockerLogo} imageAlt={"Docker"} description={"Docker"}/>

      </div> 
            <h1 className="mb-5 mt-10 text-3xl font-bold font-arial"> Security Mechanisms</h1>

      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">

        The first layer of security provided by the Bounce Allocator leverages ARM's Memory Tagging Extension (MTE), which was introduced in the ARMv8.5 standard. 
        MTE defends against use-after-free privilege escalation by embedding a 4-bit tag inside the top byte of pointers and memory locations. When a pointer dereference is performed, 
        the hardware checks that the tag in the pointer matches the tag in memory before allowing memory access. 
    
        In a use-after-free attack, such as DirtyCred, the memory would be re-tagged with a new value when the pointer is freed, preventing the attacker from reading memory using a dangling pointer. 
        Since MTE is a hardware feature, the tag check carries minimal overhead, and does not have to be triggered by developers once the tags are set. 

        While MTE is central to the Bounce Allocator, it is only one defense that it provides to safeguard against memory-based attacks. 
        <br></br>
        <br></br>

         In addition to using MTE, the Bounce Allocator implements three key data structures to prevent memory allocations from being predictable, 
         while still ensuring that they are performed in amortized constant time.
         
         The first is the Bounce Table, which holds pointers to memory allocated by the underlying operating system via Kmalloc/mmap.  
         The Bounce Table is essential for providing indirection in pointer de-references, and for making fast allocations.
         
         The next important data structure is the embedded free list. The embedded free list is
         held inside the Bounce Table, and serves as a quarantine for recently freed memory. Memory is held in the Embedded Free List
         as long as possible to prevent an attacker from triggering the re-allocation of memory that they hold a pointer to.
         This makes attacks like DirtyCred harder, as these privilege escalation vectors rely on re-allocating a specific chunk of memory to a kernel task. 


         Finally, the Ready Free List holds pointers to un-allocated Bounce Table Entries. This allows for amortized constant memory allocations without traversing the bounce table.
         Additionally, once half of the entries in the ready free list are allocated, the embedded free list is emptied, and all the entries are shuffled randomly using Fisher-Yates shuffle (linear time complexity), which
         reduces the predictability of memory allocations. The size of the ready free list can be tuned to configure the entropy provided by the Bounce Allocator

        


         <br></br>
         <br></br>
      
          Finally, the Bounce Allocator is designed such that processes never receive pointers to underlying memory, receiving only a pointer to a bounce table entry.   
          Upon de-referencing this pointer, a tag check is performed, and only if the tags match is the de-reference to the physical memory performed. 
          This creates a level of indirection to memory access, which makes it harder for attackers to probe memory allocations for specific contents without having correct access.
          Specifically, an attacker carrying out DirtyCred would not be able to probe the heap for credential structures under this model.  




        </p>
      </div>
      
      <h1 className="mb-5 mt-10 text-3xl font-bold font-arial">Current Progress</h1>

        

  <div className="flex flex-col items-center justify-center">
  <div className="text-lg text-left md:w-1/2 ml-5 mr-5">
    <p>

      The end goal of our project is to contribute the Bounce Allocator to the Linux Kernel, positioning it as the de-facto hardened memory allocator for MTE enabled devices.
      Our team has currently implemented a  version of the Bounce Allocator on the Google Pixel 9A, and is currently conducting an analysis of its performance and overhead. We've modified 
      the task and credential structure within the Android kernel to include pointers to bounce tables/entries, ensuring that future developers can take advantage of our design. 

    </p>
    <br></br>

    <p>We hope to continue developing the kernel space implementation of the bounce allocator, 
        and explore the possibility of creating a variant on iOS. 
        Furthermore, we hope to explore additional modifications to increase the security guarantees provided by the bounce allocator. 
        Finally, we hope to learn more about novel memory safety solutions, and incorporate them into the bounce allocator. 

    </p>

  </div>
</div>
</div>

  )
}