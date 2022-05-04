using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class LibraPerFemije
    {
        public int ID { get; set; }
        public string ISBN { get; set; }
        public string Emri { get; set; }
        public string Autori { get; set; }
        public string Pershkrimi { get; set; }
        public string Shtepia_Botuese { get; set; }
        public int Viti_Publikimit { get; set; }
        public string Zhanri { get; set; }
        public string Foto { get; set; }


    }
}
