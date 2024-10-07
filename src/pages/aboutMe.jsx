import Svg from '../components/svg.jsx'

const AboutMe = () => {
  return (
    <div className="Dissolvenza max-w-sm mx-auto mt-8 bg-gray-500 bg-opacity-100 shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-24 overflow-hidden"></div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32 w-full"
          src="https://media.licdn.com/dms/image/v2/D4D03AQFe5I27RO19HA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715006719264?e=1733961600&v=beta&t=lEX35PnxilvC06QKE2qEZJ79fH_jqxVXSqeVmgfeI8A"
          alt="Immagine profilo"
        />
      </div>
      <div className="text-center mt-4 pb-8">
        <h2 className="font-semibold">Riccardo Silvestri</h2>
        <p className="font-semibold">Software Architect Specialist</p>
        <Svg />
      </div>
    </div>
  );
};

export default AboutMe;
