
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfilesKontakti
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<Kontakti, Kontakti>();
            }
        }

    }
}
