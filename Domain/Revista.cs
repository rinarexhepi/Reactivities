using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Revista
    {
        [Key]
        public int ID { get; set; }
        public int ISBN { get; set; }
        public string Emri { get; set; }
        public string Autori { get; set; }
        public string Pershkrimi { get; set; }
        public string ShtepiaBotuese { get; set; } 
        public int vitiPublikimit { get; set; }
        public string Zhnari { get; set; }
        public string Foto { get; set; }
    }
}
