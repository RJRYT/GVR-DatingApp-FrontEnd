import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const expenses = [
  { id: '#123456789', date: '2 March 2021, 13:45 PM', amount: '$50,036' },
  { id: '#123456789', date: '2 March 2021, 13:45 PM', amount: '$50,036' },
  { id: '#123456789', date: '2 March 2021, 13:45 PM', amount: '$50,036' },
  { id: '#123456789', date: '2 March 2021, 13:45 PM', amount: '$50,036' },
];

const Expenses = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center mr-10">
              {/* <FaChartLine className="text-red-500 mr-4" /> */}
              <div className='mr-5'>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="#FF4550" />
                <g clip-path="url(#clip0_5736_19596)">
                  <path d="M40.0004 21.3333C40.013 21.2404 40.013 21.1462 40.0004 21.0533C39.9888 20.9751 39.9664 20.8988 39.9337 20.8267C39.8985 20.7615 39.8584 20.6991 39.8137 20.64C39.763 20.5557 39.7001 20.4793 39.6271 20.4133L39.4671 20.32C39.3901 20.2626 39.3046 20.2176 39.2137 20.1867H38.9471C38.8658 20.108 38.7709 20.0447 38.6671 20H32.0004C31.6468 20 31.3076 20.1405 31.0576 20.3905C30.8075 20.6406 30.6671 20.9797 30.6671 21.3333C30.6671 21.687 30.8075 22.0261 31.0576 22.2761C31.3076 22.5262 31.6468 22.6667 32.0004 22.6667H35.7737L30.4404 28.9467L24.6804 25.52C24.4076 25.3577 24.0858 25.2981 23.773 25.3519C23.4601 25.4057 23.1767 25.5693 22.9737 25.8133L16.3071 33.8133C16.1948 33.9481 16.1102 34.1036 16.0581 34.2711C16.0061 34.4386 15.9876 34.6147 16.0037 34.7893C16.0198 34.9639 16.0702 35.1337 16.152 35.2888C16.2338 35.4439 16.3454 35.5814 16.4804 35.6933C16.7203 35.8921 17.0222 36.0006 17.3337 36C17.5296 36.0003 17.7232 35.9575 17.9006 35.8745C18.078 35.7915 18.235 35.6705 18.3604 35.52L24.2937 28.4L29.9871 31.8133C30.2571 31.9735 30.575 32.0332 30.8848 31.982C31.1945 31.9308 31.4763 31.7719 31.6804 31.5333L37.3337 24.9333V28C37.3337 28.3536 37.4742 28.6928 37.7242 28.9428C37.9743 29.1929 38.3134 29.3333 38.6671 29.3333C39.0207 29.3333 39.3598 29.1929 39.6099 28.9428C39.8599 28.6928 40.0004 28.3536 40.0004 28V21.3333Z" fill="#FCFCFC" />
                </g>
                <defs>
                  <clipPath id="clip0_5736_19596">
                    <rect width="32" height="32" fill="white" transform="translate(12 12)" />
                  </clipPath>
                </defs>
              </svg>
</div>
              <div>
                <p className='text-sm font-bold text-gray-600 mb-2'>{expense.id}</p>
                <p className="text-gray-400 text-xs">{expense.date}</p>
              </div>
            </div>
            <p className="text-sm font-bold">{expense.amount}</p>
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <div className="px-3 py-1">
        <svg  width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5125 20.6761L1.04846 11.2361C0.600461 10.8521 0.600461 10.1481 1.04846 9.76415L11.5125 0.324149C12.1845 -0.283851 13.2725 0.164149 13.2725 1.06015L13.2725 19.9401C13.2725 20.8361 12.1845 21.2841 11.5125 20.6761Z" fill="#A098AE" />
        </svg>
        </div>
        <button className="px-3 py-1 border rounded-full bg-blue-800 text-white">1</button>
        <button className="px-3 py-1 border rounded-full ml-2">2</button>
        <button className="px-3 py-1 border rounded-full ml-2">3</button>
        <div className="px-3 py-1">
        <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.48754 0.323851L12.9515 9.76385C13.3995 10.1479 13.3995 10.8519 12.9515 11.2359L2.48754 20.6759C1.81554 21.2839 0.727539 20.8359 0.727539 19.9399L0.727539 1.05985C0.727539 0.163851 1.81554 -0.284149 2.48754 0.323851Z" fill="#A098AE" />
        </svg>
        </div>
      </div>
    </div>
  );
};

export default Expenses;