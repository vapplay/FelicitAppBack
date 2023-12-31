export const querys = {
  //products
  getAllProducts: "SELECT * FROM product",
  Producto: "INSERT INTO [MarketPlace].[dbo].[product] (title, price, category, description, fk_email, image1, image2, image3, image4) VALUES (@title, @price, @category, @description, @user, @image1, @image2, @image3, @image4);",
  getProducById: "SELECT * FROM products Where Id = @Id",
  deleteProduct: "DELETE FROM [MarketPlace].[dbo].[product] WHERE Id= @Id",
  MyProducts: "SELECT * FROM product WHERE fk_email = @user",
  updateProductById: " UPDATE [MarketPlace].[dbo].[product] SET title = @title, price =  @price, category = @category, description = @description, image1 = @image1, image2 = @image2, image3 = @image3, image4 = @image4 WHERE Id= @Id",
  addfavorite: "INSERT INTO [MarketPlace].[dbo].[favorite] (fk_email, fk_product ) VALUES (@user, @id)",
  deletefavorite: "DELETE FROM [MarketPlace].[dbo].[favorite] WHERE Id= @Id",
  getallfavorite: "SELECT * FROM favorite WHERE fk_email = @user",
   //users
  addNewUsers: "INSERT INTO [dbo].[USUARIOS] (Nombres, FechaNacimiento, email, password, Genero, pais, Imagen) VALUES  (@Nombres, @FechaNacimiento, @email, @password, @Genero, @pais, @Imagen)",
  getUserById: "SELECT * FROM users Where email = @email",
  getUserLogin: "SELECT * FROM USUARIOS Where email = @email and password = @password",
  GetImages: "SELECT * FROM [IMAGNES] Where email = @email",
  getUser: "SELECT * FROM users Where email = @email",
  InsertImg: "INSERT INTO [dbo].[IMAGNES] (imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, email) VALUES (@image1, @image2, @image3, @image4, @image5, @image6, @image7, @email)",
  deleteUser: "DELETE FROM users Where email = @email",

};
