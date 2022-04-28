using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Book
    {
        [Key]
        public string Isbn { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Price { get; set; }
    }
}
