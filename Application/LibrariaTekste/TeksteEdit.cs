using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaTekste
{
    public class TeksteEdit
    {
        public class Command : IRequest
        {
            public Tekste Tekste { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var teksti = await _context.Tekste.FindAsync(request.Tekste.ID);

                _mapper.Map(request.Tekste, teksti);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
