export default function ResumePage() {
  return (
    <div className=" w-[100vw] h-screen inset-0">
          <embed
        src="/Jagadeesh_V_Resume_Oct_2025.pdf"
        className="w-full h-full  max-h-screen"
        type="application/pdf"
        style={{ objectFit: 'contain' }}
      />

    </div>
  );
}
