using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaBoterore
{
    public class LibraBoterorEdit
    {
        public class Command : IRequest
        {
            public LibraBoteror LibraBoteror { get; set; }
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
                var libraBoteror = await _context.LibraBoteror.FindAsync(request.LibraBoteror.ID);

                _mapper.Map(request.LibraBoteror, libraBoteror);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
