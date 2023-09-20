
// const foodRegex = /(?<=\d)\s(.*?)(?=\s\()/g;
const foodRegex = /\d\s(.*)\s\(/g;
const priceRegex = /\d+,\d\d/g;


export function menuParser() {

    const fetchData = async () => {
        try {
          // Fetch data from public folder.
            const response = await fetch('/raw_menu.txt'); 
            const data = await response.text();

            // let lines = data.split(/\r?\n/);
            let lines = data.split('\n');
            
            lines.forEach(line => {
                let food = foodRegex.exec(line);
                let price = priceRegex.exec(line);


                console.log(line);
                if (food != null) {
                  console.log("Parsed Food: " + food[1]);                                    
                }
                else {
                  console.log("No food found in line: " + line);
                }

                if (price != null) {
                  console.log("Parsed price:" + price);
                }
                else {
                  console.log("No price found in line: " + line);
                }
                
            }); 
        
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    fetchData();
    
      

  }
  