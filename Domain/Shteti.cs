
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Shteti
    {
        [Key]
        public int ID_Shteti { get; set; }
        [Required]
        public string Emri { get; set; }
        
    }
}
