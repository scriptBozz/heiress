class Books {
    constructor(
        name,
        author,
        noOfPages,
        category,
        isOpen,
        Price,
        purchased,
        currentPage,
        pagesLeft,
    ){
        this.Name = name;
        this.Author = author;
        this.noOfPages = noOfPages;
        this.category =category;
        this.isOpen = isOpen;
        this.Price = Price;
        this.purchased = purchased;
        this.currentPage = currentPage;
        this.pagesLeft = pagesLeft;
     }

    toggleBook =  function(bookStatus){
        this.isOpen = bookStatus
    };

    remaininPages = function(){
        this.noOfPages - this.currentPage
        return remaininPages()
    };




}

export default Books