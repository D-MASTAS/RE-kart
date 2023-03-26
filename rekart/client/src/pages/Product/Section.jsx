import { ethers } from 'ethers'

const Section = ({ title, items, togglePop }) => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-green-800">
  <h3 id={title} class="text-3xl mt-5 font-bold">{title}</h3>

  <div class="grid gap-10 grid-cols-5 mx-auto max-w-7xl mt-20">
    {items.map((item, index) => (
      <div class="w-full max-w-xs mx-auto my-5 cursor-pointer relative transition duration-250 ease-in-out shadow-green" key={index} onClick={() => togglePop(item)}>
        <div class="w-full z-[-1]">
          <img class="w-full h-48 object-cover rounded-lg" src={item.image} alt="Item Image" />
        </div>
        <div class="w-full bg-white py-5 px-10  bottom-0 left-0 rounded-b-lg">
          <h4 class="text-xl font-bold">{item.name}</h4>
          <h4 class="text-lg font-bold text-gray-700 mt-2">CF: {item.carbonfootprint} lbs CO2e</h4>
          <p class="mt-2 text-green-600">{ethers.utils.formatUnits(item.cost.toString(), 'ether')} MATIC</p>
        </div>
      </div>
    ))}
  </div>
</div>


    );
}

export default Section;