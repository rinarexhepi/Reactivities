using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Libri> Libri { get; set; }
        public DbSet<LibraPerFemije> LibraPerFemije { get; set; }
        public DbSet<Tekste> Tekste { get; set; }
        public DbSet<Revista> Revista { get; set; }
        public DbSet<Publikime> Publikime { get; set; }
        public DbSet<Komente> Komente { get; set; }
        public DbSet<Autori> Autori { get; set; } 
        public DbSet<LibraBoteror> LibraBoteror { get; set; }
        public DbSet<LibraTeRinj> LibraTeRinj { get; set; }
        public DbSet<Kontakti> Kontakti { get; set; }








    }
}
