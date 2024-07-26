import { defineStore } from "pinia";
import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useHotelsProgramsStore = defineStore("hotels-programs-store", {
  state: () => {
    return {
      hotels: [],
      //   selectedProgram: null,
    };
  },

  actions: {
    async fetchPlaces() {
      try {
        const querySnap = await getDocs(collection(db, "hotels-programs"));
        const documentData = querySnap.docs[0]?.data();
        if (documentData && Array.isArray(documentData.placesList)) {
          this.hotels = documentData.placesList;
        } else {
          console.error("Invalid data format:", documentData);
        }
        console.log("Fetched hotels:", this.hotels);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    },

    // async getProgramById(id) {
    //   const docSnap = await getDoc(doc(db, "programmes", id));
    //   if (docSnap.exists()) {
    //     let program = { ...docSnap.data(), id: id };
    //     this.selectedProgram = program;
    //     // console.log(program);
    //     return program;
    //   }
    // },
  },
});
