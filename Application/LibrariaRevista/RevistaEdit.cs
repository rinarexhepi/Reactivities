

using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaRevista
{
    public class RevistaEdit
    {
        public class Command : IRequest
        {
            public Revista Revista { get; set; }
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
                var revista = await _context.Revista.FindAsync(request.Revista.ID);

                _mapper.Map(request.Revista, revista);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
