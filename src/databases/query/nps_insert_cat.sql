alter procedure nps_insert_cat  
    @cat_id int,  
    @cat_nom varchar(50),  
    @cat_obs varchar(150)  
as  
begin  
	declare @error int = 0, @data varchar(max), @mensaje_usuario varchar(300) = ''

	declare @tmp_respuesta as table(
		codigo_estado int,
		mensaje varchar(500),
		datos varchar(max),
		error_mensaje varchar(max),
		error_linea int,
		error_procedimiento varchar(100)
	)

	begin tran
	begin try

		if isnull(@cat_id,0) = 0
		begin
			set @mensaje_usuario = 'el campo [cat_id] esta vacio'
			raiserror ('campo: [cat_id] / no se ingreso ningun valor',16,1)
		end
		insert into tmp_categoria (cat_id,cat_nom,cat_obs)  
		values (@cat_id,@cat_nom,@cat_obs) 
		
		set @data = (select * from tmp_categoria where cat_id = @cat_id for json path)
		
		insert into @tmp_respuesta 
		values (1001,'registro exitoso',@data,'',0,'')
	
	end try
	begin catch
		set @error = 1
		if(@@trancount > 0)
		begin
			rollback tran
		end

		if not exists(select * from @tmp_respuesta)
		begin
			insert into @tmp_respuesta 
			values (1004,(case when isnull(@mensaje_usuario,'') = '' then 'hubo un error' else @mensaje_usuario end),NULL,error_message(),error_line(),error_procedure())
		end

	
	end catch
	
	if @error = 0
	begin
		commit tran
	end
	select * from @tmp_respuesta  
end