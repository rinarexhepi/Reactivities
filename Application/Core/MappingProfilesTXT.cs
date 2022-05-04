
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfilesTXT
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<Tekste, Tekste>();
            }
        }
    }
}
    
