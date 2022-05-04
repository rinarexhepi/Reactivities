

using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Country
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Shteti Shteti { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler (DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
               var Shteti=await _context.Shteti.FindAsync(request.Shteti.ID_Shteti);
                _mapper.Map(request.Shteti, Shteti); 
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
