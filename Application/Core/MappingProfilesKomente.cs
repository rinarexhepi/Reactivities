
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfileKomente
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<Komente, Komente>();
            }
        }

    }
}
