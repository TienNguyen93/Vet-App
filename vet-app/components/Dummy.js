import doctor from '../assets/doctor.jpg'
import doctor2 from '../assets/doctor2.jpg'
import doctor3 from '../assets/doctor3.jpg'
import doctor4 from '../assets/doctor4.jpg'

import vet1 from '../assets/vet1.png'
import vet2 from '../assets/vet2.png'
import vet3 from '../assets/vet3.png'

export const doctors = [
    {
        id: 1,
        image: doctor,
        name: "Dr. Nelson Armstrong",
        clinic: "Petsie Care Team",
        available: true,
        review: true
    },
    {
        id: 2,
        image: doctor2,
        name: "Dr. Amy Robert",
        clinic: "Petsie Care Team",
        available: false,
        review: false
    },
    {
        id: 3,
        image: doctor3,
        name: "Dr. Thomas Anderson",
        clinic: "Petsie Care Team",
        available: true,
        review: true
    },
    {
        id: 4,
        image: doctor4,
        name: "Dr. Lucas Kinderheim",
        clinic: "Petsie Care Team",
        available: false,
        review: false
    }
]

export const clinics = [
    {
        id: 1,
        image: vet1,
        name: "Petsie Care Team",
        clinic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        available: false,
        review: false,
    },
    {
        id: 2,
        image: vet2,
        name: "Bronx Veterinary Center",
        clinic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        available: false,
        review: false,
    },
    {
        id: 3,
        image: vet3,
        name: "Inwood Animal Clinic",
        clinic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        available: false,
        review: false,
    },
]
