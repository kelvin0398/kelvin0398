import InternetBanking from '../assets/projects/internet-banking.jpg'
import SimpleLogistics from '../assets/projects/logistics.png'
import CoffeeShop from '../assets/projects/f&b.jpg'
import MyHotel from '../assets/projects/hotel.jpg'

//PROJECT DATA
// LIST OF COMPLETED SOLO PROJECTS
//Add items

const projects = 
[
  {
    img : InternetBanking,
    name : "Internet Banking Desktop Application",
    description: "An Banking App in which users can make transaction and check balance on their Desktop.",
    techs : ["Python", "CustomTkinter", "Pandas"],
    link : 'https://github.com/kelvin0398/internet-banking-desktop-app',
  },
  {
    img : SimpleLogistics,
    name : "Truck and Driver Manager",
    description: "A Logistics Utility used for Truck and Driver Mangement, user can also inspect Warehouse Inventory.",
    techs : ["Python", "CustomTkinter"],
    link : 'https://github.com/kelvin0398/truck-booking-and-warehouse-management-desktop-app'
  },
  {
    img : CoffeeShop,
    name : "Restaurant Website",
    description: "A F&B website for online order and payment.",
    techs : ["Javascript" ,"HTML" ,"CSS" ,"PostgresSQL" ,"Python" ,"FastAPI","Docker"], 
    link : 'https://github.com/kelvin0398/f-b-coffee-shop'
  },
  {
    img : MyHotel,
    name : "Hotel Management",
    description: "A Hospitality for Full Stack Development",
    techs : ["Javascript", "PostgresSQL" ,"ReactJS" ,"NodeJS" ,"HTML" ,"CSS" ,"Docker"],
    link : 'https://github.com/kelvin0398/hotel-management-erp' 
  },
]

export default projects;