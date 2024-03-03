import "./Category.scss";

import cat1 from "../../../assets/category/me_cat.png";
import cat2 from "../../../assets/category/cs_cat.png";
import cat3 from "../../../assets/category/ee_cat.jpg";
import cat4 from "../../../assets/category/cv_cat.jpg";
const Category = () => {
// const Category = ({ categories }) => {
  
  
  return (
    
    <div className="shop-by-category">
      <div className="categories">
        {/* <div  className="category">
             <img src={cat1} alt="" />
            </div> */}
{/* 
        {categories?.data?.map((item) => (
          
          <div key={item.id} className="category">
            <img src={cat1} alt="" />
          </div>
        ))} */}
            <div className="category">
             <img src={cat1} alt="" />
            </div>
             <div className="category">
             <img src={cat2} alt="" />
            </div>
             <div className="category">
             <img src={cat3} alt="" />
            </div>
            <div className="category">
             <img src={cat4} alt="" />
            </div> 
      </div>
    </div>
  );
};

export default Category;
