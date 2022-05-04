using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaPerFemije
{
    public class LibraPerFemijeEdit
    {
        public class Command : IRequest
        {
            public LibraPerFemije LibraPerFemije { get; set; }
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
                var libriPerFemije = await _context.LibraPerFemije.FindAsync(request.LibraPerFemije.ID);

                _mapper.Map(request.LibraPerFemije, libriPerFemije);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
